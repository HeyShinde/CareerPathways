// pages/index.tsx
import Link from "next/link";
import Image from "next/image";
import connectToDatabase from "../lib/mongodb";
import Career from "../models/Career";
import { ObjectId } from "mongoose";
import styles from "./Home.module.css"; // Import CSS module

interface Career {
  id: string;
  title: string;
  thumbnail: string;
}

async function fetchCareers(): Promise<Career[]> {
  await connectToDatabase();
  const careers = await Career.find({}).lean();
  return careers.map((career) => ({
    id: (career._id as ObjectId).toString(),
    title: career.title,
    thumbnail: career.thumbnail,
  }));
}

const HomePage = async () => {
  const careers = await fetchCareers();

  return (
    <div className={styles.container}>
      <h1 className="text-center m-5">Job Roles</h1>
      <div className={styles.cardGrid}>
        {careers.map((career) => (
          <div key={career.id} className={styles.card}>
            <Link href={`/careers/${career.id}`}>
              <Image
                src={career.thumbnail}
                alt={career.title}
                width={500}
                height={300}
                className={styles.thumbnail}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{career.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

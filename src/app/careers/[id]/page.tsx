// pages/careers/[id].tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import connectToDatabase from "../../../lib/mongodb";
import Career from "../../../models/Career";
import { ObjectId, Document } from "mongoose";
import styles from "./Career.module.css";

interface Career {
  id: string;
  title: string;
  description: string; // HTML content
  thumbnail: string;
}

interface CareerDocument extends Document {
  _id: ObjectId;
  title: string;
  description: string;
  thumbnail: string;
}

interface Params {
  params: {
    id: string;
  };
}

async function fetchCareer(id: string): Promise<Career | null> {
  await connectToDatabase();
  const career = await Career.findById(id).lean<CareerDocument>();
  if (!career) {
    return null;
  }
  return {
    id: career._id.toString(),
    title: career.title,
    description: career.description,
    thumbnail: career.thumbnail,
  };
}

export async function generateStaticParams() {
  await connectToDatabase();
  const careers = await Career.find({}).lean<CareerDocument[]>();
  return careers.map((career) => ({
    id: career._id.toString(),
  }));
}

const CareerPage = async ({ params }: Params) => {
  const career = await fetchCareer(params.id);

  if (!career) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{career.title}</h1>
      <Image
        src={career.thumbnail}
        alt={career.title}
        width={800}
        height={500}
        className={styles.thumbnail}
      />
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: career.description }} // Render HTML content
      />
    </div>
  );
};

export default CareerPage;

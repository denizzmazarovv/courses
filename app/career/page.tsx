import CareerContent from "./CareerContent";

export async function generateStaticParams() {
  return [{ id: "1" }];
}

export default function CareerPage() {
  return <CareerContent />;
}

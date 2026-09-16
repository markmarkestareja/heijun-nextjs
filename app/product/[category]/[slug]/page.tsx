import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;

  console.log("Category:", category);
  console.log("Slug:", slug);

  // Later: find the product using category + slug

  return (
    <main>
      <h1>{slug.replaceAll("-", " ")}</h1>
      <p>Category: {category}</p>
    </main>
  );
}
interface ResumeProps {
  params: Promise<{ id: string }>;
}

export default async function Resume({ params }: ResumeProps) {
  const { id } = await params;
  return <h1>Resume № {id}</h1>;
}

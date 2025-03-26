import { commentsData } from "../data";

export async function GET(
  request: Request, 
  { params }: {params: Promise<{id: string}>})
  {
    const { id } = await params;
    const comment = commentsData.find((comment) => comment.id === parseInt(id));

    return Response.json(comment);
}

export async function PATCH(
  request: Request, 
  {params}: {params: Promise<{id: string}>})
  {
    const {id} = await params;
    const body = await request.json();
    const {text} = body;

    const index = commentsData.findIndex((comment) => comment.id === parseInt(id));
    commentsData[index].text = text;

    return Response.json(commentsData[index]);
}
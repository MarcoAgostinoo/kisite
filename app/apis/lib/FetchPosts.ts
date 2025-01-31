// app/apis/lib/FetchPosts.ts
export async function fetchPosts() {
  const response = await fetch("http://localhost:1337/api/articles?populate=*", {
    headers: {
      Authorization: `Bearer 96e8b96deeb1043257913b5485d761690037ee736da498ada5ffb6fac68a77718efc12665374ffccc092eb685bbafe62bfea8b26810e6dba44face96de28e4cf6a9f5f233057aa76dbd6599530d758bf082f89f6202b214b9d557a197474d728eb1f31f8353accc50567ae82d677b5694eaa41aaccdec7243eefbebb48cf0bc8`
    }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar os posts");
  }

  const data = await response.json();
  return data.data;
}

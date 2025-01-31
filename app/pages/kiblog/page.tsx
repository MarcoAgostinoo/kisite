import CustomFooter from "@/app/components/footer/CustomFooter";
import NavBar from "@/app/components/navbar/NavBar";
import BlogPosts from "@/app/components/Post/Post";

export default function KiBlog() {
  return (
    <div>
      <NavBar />

      <BlogPosts />
      <CustomFooter />
    </div>
  );
}

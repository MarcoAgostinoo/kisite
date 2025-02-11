import CustomFooter from "@/app/components/footer/CustomFooter";
import NavBar from "@/app/components/navbar/NavBar";
import ArticlesPage from "@/app/components/Post/ArticlesPage";


export default function KiBlog() {
  return (
    <div>
      <NavBar />
      <ArticlesPage />
      <CustomFooter />
    </div>
  );
}

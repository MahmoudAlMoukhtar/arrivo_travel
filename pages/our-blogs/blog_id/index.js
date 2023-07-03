export async function getServerSideProps({params}) {
  const {blog_id} = params;
  // fetch data for the post with ID equal to 'post'
  return {props: {type: blog_id}};
}

const BlogPage = ({params: id}) => {
  return (
    <div>
      <h2>{}</h2>
    </div>
  );
};

export default BlogPage;

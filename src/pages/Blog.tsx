import BlogFeed from '../components/ui/BlogFeed';
import Section from '../components/ui/Section';

const Blog: React.FC = () =>{
  return (
    <main id="skip">
      <Section id="blog">
        <BlogFeed />
      </Section>
    </main>
  )
}

export default Blog;

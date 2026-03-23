import React from 'react';
import Navbar from './Navbar';
import './Blog.css';
import { ArrowRight } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    title: 'Introducing FormFlow 2.0',
    excerpt: 'The ultimate form builder and backend. See what changed and how you can port your existing forms seamlessly.',
    date: 'Mar 22, 2026',
    category: 'Product Updates'
  },
  {
    id: 2,
    title: 'How to block spam submissions effectively',
    excerpt: 'Spam is a major issue for HTML forms. Learn how our AI-driven spam protection keeps your inbox clean.',
    date: 'Mar 15, 2026',
    category: 'Guides'
  },
  {
    id: 3,
    title: 'Designing forms that convert',
    excerpt: 'Best practices for UX and UI to maximize the submission rate of your contact and lead generation forms.',
    date: 'Mar 02, 2026',
    category: 'Design'
  }
];

const Blog = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="blog-section">
        <div className="blog-header">
          <h1>FormFlow Blog</h1>
          <p>Product updates, guides, and insights to help you build better forms.</p>
        </div>
        
        <div className="blog-grid">
          {mockPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-category">{post.category}</div>
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <button className="read-more">Read article <ArrowRight size={14} /></button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;

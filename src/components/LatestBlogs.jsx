import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';
import './Features.css';

const recentPosts = [
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

const LatestBlogs = () => {
  return (
    <section className="blog-section" style={{ paddingTop: '100px', backgroundColor: '#fafafa' }}>
      <div className="features-header">
        <h2 className="section-title">Latest from the blog</h2>
        <p className="section-subtitle">Catch up on our latest news, product updates, and features.</p>
      </div>
      
      <div className="blog-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {recentPosts.map((post) => (
          <article key={post.id} className="blog-card" style={{ background: '#ffffff' }}>
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
      
      <div style={{ textAlign: 'center', marginTop: '48px', paddingBottom: '40px' }}>
        <Link to="/blog" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
          View all posts <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default LatestBlogs;

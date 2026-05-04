import React from 'react';
import { motion } from 'framer-motion';

const Statement = ({ quote, text }) => {
  return (
    <section className="statement">
      <div className="statement-inner">
        <motion.blockquote
          className="statement-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {quote}
        </motion.blockquote>
        {text && (
          <motion.p
            className="statement-text"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Statement;

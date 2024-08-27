import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, ChevronDown, MessageCircle, X ,Loader } from 'lucide-react';
import React, { useState } from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-12 w-12 text-indigo-500 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

export default FeatureCard
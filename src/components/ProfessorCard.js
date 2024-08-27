import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp, ChevronDown, MessageCircle, X ,Loader } from 'lucide-react';
import React, { useState } from 'react';

const ProfessorCard = ({ name, department, rating, imageUrl }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img
      src={imageUrl}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
    <p className="text-gray-600 text-center mb-2">{department}</p>
    <div className="flex items-center justify-center">
      <Star className="h-5 w-5 text-yellow-400 mr-1" />
      <span className="font-medium">{rating}</span>
    </div>
  </motion.div>
);

export default ProfessorCard

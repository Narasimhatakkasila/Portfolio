import React from 'react';
import './why.css';
import examLogo from './images/exam.png';  // new exam logo here
import scholar from './images/scholarship.png'; // still used for VIT
import project from './images/project.png';
import leetcode from './images/leetcode.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='modiv'
                >
                    <div className="flex2">
                        <div className="box">
                            <img src={examLogo} alt="exam-logo" className='why_logo' />
                            <h4 className='mid_text'>Top 3%</h4>
                            <p className='main_text_why'>Top 3% in engineering entrance exams (AP, TS, KA)</p>
                        </div>
                        <div className="box">
                            <img src={scholar} alt="vit-logo" className='why_logo' />
                            <h4 className='mid_text'>2026</h4>
                            <p className='main_text_why'>Vellore Institute of Technology Student</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='modiv'
                >
                    <div className="flex2">
                        <div className="box">
                            <img src={leetcode} alt="leetcode-logo" className='why_logo' />
                            <h4 className='mid_text'>100+</h4>
                            <p className='main_text_why'>LeetCode Problems Solved</p>
                        </div>
                        <div className="box">
                            <img src={project} alt="project-logo" className='why_logo' />
                            <h4 className='mid_text'>5+</h4>
                            <p className='main_text_why'>Completed Projects</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WhyHireMe;

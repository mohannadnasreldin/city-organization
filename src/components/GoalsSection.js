import React from 'react';

const GoalsSection = () => {
    return (
        <section id="goals" className="py-12 px-6 md:px-20 bg-green-50 text-center rtl">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-red-700 mb-4">أهداف الجمعية</h2>
                <p className="text-lg text-gray-700 mb-6">نهدف إلى تحقيق الأهداف التالية</p>
                <ul className=" list-inside text-gray-600 space-y-2">
                    <li className="text-lg">الهدف 1</li>
                    <li className="text-lg">الهدف 2</li>
                    <li className="text-lg">الهدف 3</li>
                </ul>
            </div>
        </section>
    );
};

export default GoalsSection;

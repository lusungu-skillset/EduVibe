import React from 'react';

const PopularCourses = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Popular Courses</h1>
      
      <div className="space-y-6">
        {/* All Programme Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">All Programme</h2>
          <ul className="space-y-1 text-gray-700">
            <li className="flex">
              <span className="mr-2">-</span>
              <span>UA/UA Design</span>
            </li>
            {Array(4).fill().map((_, i) => (
              <li key={i} className="flex">
                <span className="mr-2">-</span>
                <span>Program Design</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Student Count Sections */}
        <div className="space-y-4">
          {[
            { count: '1 - 40 students', post: '1 - 40 July post' },
            { count: '2 - 11 students', post: '1 - 10 July post' },
            { count: '3 - 234 students', post: '1 - 24 July post' },
            { count: '4 - 342 students', post: '1 - 26 July post' }
          ].map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-800">{item.count}</h3>
              <p className="ml-4 text-gray-700 flex">
                <span className="mr-2">-</span>
                <span>{item.post}</span>
              </p>
            </div>
          ))}
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Course Sections */}
        <div className="space-y-4">
          {/* Product Management */}
          <div>
            <h3 className="font-semibold text-gray-800">Product Management Basic - Course</h3>
            <p className="text-sm text-gray-600">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform.</p>
            <p className="text-sm text-gray-600">Gojek Indonesia.</p>
          </div>
          
          {/* EM Data Science */}
          <div>
            <h3 className="font-semibold text-gray-800">EM Data Science Professional Certificate</h3>
            <p className="text-sm text-gray-600">Product Management Masterclass, you will learn with Susan Johnson - Head of Product Customer Platform.</p>
            <p className="text-sm text-gray-600">Gojek Indonesia.</p>
          </div>
          
          {/* Emoti Now 1 */}
          <div>
            <h3 className="font-semibold text-gray-800">Emoti Now</h3>
            <ul className="space-y-1 text-gray-700">
              {[
                'MK50,000', 'Emoti Now', 'MK5,000', 
                'Emoti Now', 'MK15,000', 'Emoti Now', 'MK25,000'
              ].map((item, index) => (
                <li key={index} className="flex">
                  <span className="mr-2">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Science of Well-Being */}
          <div>
            <h3 className="font-semibold text-gray-800">The Science of Well-Being</h3>
            <p className="text-sm text-gray-600">Product Management Masterclass, you will learn with Susan Johnson - Head of Product Customer Platform.</p>
            <p className="text-sm text-gray-600">Gojek Indonesia.</p>
          </div>
          
          {/* Python */}
          <div>
            <h3 className="font-semibold text-gray-800">Python for Everybody Specialization</h3>
            <p className="text-sm text-gray-600">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform.</p>
            <p className="text-sm text-gray-600">Gojek Indonesia.</p>
          </div>
          
          {/* Emoti Now 2 */}
          <div>
            <h3 className="font-semibold text-gray-800">Emoti Now</h3>
            <ul className="space-y-1 text-gray-700">
              {['MK15,000', 'Emoti Now', 'MK25,000'].map((item, index) => (
                <li key={index} className="flex">
                  <span className="mr-2">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
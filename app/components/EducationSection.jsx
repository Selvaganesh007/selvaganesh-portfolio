const EducationSection = () => {
  return (
    <section id="education">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        Education
      </h2>
      <div className="flex flex-row-reverse flex-wrap gap-10 justify-around">
        <div className="p-3 rounded-2xl shadow-md shadow-purple-600">
          <div>Secondary School Examination</div>
          <div>Nadar Higher Secondary School, Kovilpatti.</div>
          <div>89.4%</div>
          <div>2016</div>
        </div>
        <div className="p-3 rounded-2xl shadow-md shadow-purple-600">
          <div>Higher Secondary School Examination</div>
          <div>Nadar Higher Secondary School, Kovilpatti.</div>
          <div>75.08%</div>
          <div>2018</div>
        </div>
        <div className="p-3 rounded-2xl shadow-md shadow-purple-600">
          <div>BACHELOR OF SCIENCE (Computer Science)</div>
          <div>Sri Ramasamy Naidu Memorial College, Sattur.</div>
          <div>70.03%</div>
          <div>2021</div>
        </div>
        <div className="p-3 rounded-2xl shadow-md shadow-purple-600">
          <div>MCA (Master of Computer Applications)</div>
          <div>Madurai Kamaraj University, Madurai.</div>
          <div>65.27%</div>
          <div>2024</div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12  mx-auto text-center my-8">
      <p className="text-yellow-600 mb-4 text-lg">{subHeading}</p>
      <h2 className="text-3xl border-y-2 py-4" >{heading}</h2>
    </div>
  );
};

export default SectionTitle;

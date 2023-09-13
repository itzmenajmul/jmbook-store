import Swal from "sweetalert2";
// type: swl to impor
const Header = () => {
  const handlePopular = () => {
    Swal.fire(
      "মদ খাও মানুষ হও মাত্র ছয়টা বইয়ে, আবার জনপ্রিয় বই খুঁজতে আসছো",
      "ও খইলজারুন আমার “বটি“ টা নিয়া আয়",
      "question"
    );
  };
  return (
    <div className="text-center lg:my-5">
      <h1
        className="
            text-3xl 
            lg:text-5xl font-extrabold text-[#BC7AF9] mb-4"
      >
        Jhankar Mahbub Books Store
      </h1>
      <button
        onClick={handlePopular}
        className="btn font-semibold text-gray-200 bg-[#793FDF] mb-4 lg:mb-0"
      >
        Popular
      </button>
    </div>
  );
};

export default Header;

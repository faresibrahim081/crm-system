import { useState } from "react";

function ClientModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Button to open the modal */}
      <button onClick={toggleModal} className="btn btn-primary">
        فتح النموذج
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full p-4 bg-white rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
            <h2 className="mb-1 text-lg font-bold text-right">
              تعديل على بيانات العميل أو اضافة عقد
            </h2>
            <h3 className="mb-1 font-medium text-right text-gray-400 text-md">
              عدل علي البيانات او اضف عقدا جديدا{" "}
            </h3>

            <form className="space-y-4">
              {/* Client Name */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right">
                  اسم العميل
                </label>
                <input
                  type="text"
                  className="w-full text-right input input-bordered"
                  placeholder="احمد"
                />
              </div>

              {/* Website URL */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right">
                  الموقع الإلكتروني
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-grow text-right input input-bordered"
                    placeholder="www.example.com"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full text-right input input-bordered"
                  placeholder="البريد الإلكتروني"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right">
                  العنوان
                </label>
                <input
                  type="text"
                  className="w-full text-right input input-bordered"
                  placeholder="العنوان"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right">
                  الوصف
                </label>
                <textarea
                  className="w-full text-right textarea textarea-bordered"
                  rows="2"
                  placeholder=" ...على سبيل المثال"
                ></textarea>
              </div>

              {/* Contract Upload */}
              <div>
                <label className="block mb-1 text-sm font-medium text-right">
                  اضافة عقد
                </label>
                <div className="p-4 text-center border-2 border-gray-300 border-dashed rounded">
                  <input
                    type="file"
                    className="w-full max-w-xs file-input file-input-bordered"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between mt-1">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="w-1/2 btn btn-ghost"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="w-1/2 text-white bg-green-700 btn"
                >
                  تأكيد
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientModal;

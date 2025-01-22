import { useSelector, useDispatch } from "react-redux";
import { bookAppointment } from "../reducers/lawyers";

function LawyersList() {
  const lawyers = useSelector((state) => state.lawyers.data);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <h1 className="w-full text-center text-3xl my-10 font-bold">
        Choose your lawyer
      </h1>
      <div className="w-full grid grid-cols-3 gap-2 place-items-center">
        {lawyers.map((lawyer, idx) => {
          return (
            <div
              key={idx}
              className="w-full m-2 p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="flex flex-col items-center">
                <h5 className="mb-1 text-xl font-medium text-black-900">
                  {lawyer.name}
                </h5>
                <span className="text-sm text-gray-500">
                  {lawyer.specialties.join(", ")}
                </span>
                <span className="text-sm text-gray-500">
                  Cost: {lawyer.cost}$
                </span>
                <span className="text-sm text-gray-500">
                  Available:{" "}
                  {lawyer.availableTimeSlots.length !==
                  lawyer.appointments.length ? (
                    lawyer.availableTimeSlots
                      .filter((time) => !lawyer.appointments.includes(time))
                      .map((time) => {
                        return (
                          <button
                            onClick={() =>
                              dispatch(
                                bookAppointment({
                                  id: idx,
                                  time,
                                })
                              )
                            }
                            key={time}
                            className="inline rounded-md mx-0.5 py-0.5 px-1.5 border border-gray-200 text-xs text-black transition-all shadow-sm hover:bg-blue-200"
                          >
                            {time}
                          </button>
                        );
                      })
                  ) : (
                    <button className="inline rounded-md mx-0.5 py-0.5 px-1.5 border border-gray-200 text-xs text-black transition-all shadow-sm hover:bg-blue-200">
                      Not Available
                    </button>
                  )}
                </span>
                <span className="text-sm text-gray-500">
                  Appointment History:{" "}
                  {lawyer.appointments.length > 0 ? (
                    lawyer.appointments.map((time) => {
                      return (
                        <button
                          onClick={() =>
                            dispatch(
                              bookAppointment({
                                id: idx,
                                time,
                              })
                            )
                          }
                          key={time}
                          className="inline rounded-md mx-0.5 py-0.5 px-1.5 border border-gray-200 text-xs text-black transition-all shadow-sm hover:bg-blue-200"
                        >
                          {time}
                        </button>
                      );
                    })
                  ) : (
                    <button className="inline rounded-md mx-0.5 py-0.5 px-1.5 border border-gray-200 text-xs text-black transition-all shadow-sm hover:bg-blue-200">
                      No appointments
                    </button>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LawyersList;

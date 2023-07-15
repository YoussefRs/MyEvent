import AdminNavBar from "@/components/AdminNavBar";
import CreateEventForm from "@/components/CreateEventForm";
import Image from "next/image";
import React from "react";

function Eventform() {
    return (
        <div className="pt-20 lg:pt-8">
            <AdminNavBar />
            <center className = "p-6">
                <div className="flex flex-col md:h-[calc(88vh)] md:w-[90%] md:flex-row justify-center ">
                    <div className="flex-1 mx-6 mb-6 ">
                        <Image
                            src="/img/SliderPics/edm2.jpg"
                            alt="Event Image"
                            width={500}
                            height={500}
                            className="w-full h-full object-contain md:object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex-1 m-6 md:m-0 md:mr-6 md:mb-6">
                        <CreateEventForm />
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Eventform;

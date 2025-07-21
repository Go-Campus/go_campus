"use client"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Accordion = (props) => {


    const [isOpen, setIsOpen] = useState(false);


    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    const { title, content } = props;



    return (
        <div>
            <div className="flex flex-col gap-4 border-b border-gray-200 py-4">
                <div className="flex justify-between items-center">
                    <h1>{title}</h1>
                    <button onClick={toggleAccordion}>{isOpen ? <Minus /> : <Plus />}</button>
                    
                </div>
                {isOpen && <div className="flex flex-col gap-4">
                    <p>{content}</p>
                </div>}
            </div>
        </div>
    )
}

export default Accordion;
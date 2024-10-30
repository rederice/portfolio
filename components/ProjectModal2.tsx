import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {setShowModal: any}
const imageLoader = require("../pages/api/imageLoader.js");

export default function ProjectModal(obj: Props) {
    
    return (
        <><motion.div
        initial={{opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1}}
        className="flex fixed justify-center items-center overflow-hidden inset-0 z-50 outline-none focus:outline-none bg-[#444]/90 h-screen"
        >
            <div className="flex py-6 items-center justify-center w-[100vw]">
                {/*content*/}
                <div className="flex flex-col items-center border-0 rounded-lg shadow-lg relative w-full overflow-y-scroll h-screen
                outline-none focus:outline-none overscroll-contain">
                    {/*container*/}
                    <div className='max-w-[1140px] bg-[rgb(36,36,36)]'>
                    {/*header*/}
                    <div className="relative flex flex-row items-center py-28 bg-[#333]/80 rounded-t">
                        <div className='flex flex-col w-full'>
                            <h3 className="text-4xl font-bold text-blue-400 tracking-wider text-center">
                            Taiwan High Speed Rail Booking System
                            </h3>
                            <h4 className='pt-2 font-semibold tracking-wider text-center'>
                            A THSR booking system design using software engineering techniques
                            </h4>
                        </div>
                        <button
                            className="absolute top-0 right-0 p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => obj.setShowModal(false)}
                        >
                            <span className=" bg-transparent text-white h-6 w-6 text-3xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative pb-10 flex items-center justify-center -mt-16">
                        <Image
                        className='rounded-lg'
                        src="/oop-function.jpg"
                        loader={imageLoader}
                        width={704}
                        height={545}
                        alt='oop-overview'
                        ></Image>
                    </div>
                    {/* overview */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Overview</h3>
                        <h4 className='text-white text-lg pt-6 pb-10 tracking-wider space-y-2'>
                            <p>THSR system consists of 5 use cases mainly about <span className='projectSlideUnderlineText'>train ticket booking and searching</span>.</p>
                            <p>During my final project of object-oriented programming course at NTU, my team walked through <span className='projectSlideUnderlineText'>software engineering</span> process of system design to simulate real-world project development.</p>
                            <p>We drew <span className='projectSlideUnderlineText'>UML diagrams</span> to fulfill analysis and design sections and eventually implemented the system using <span className='projectSlideUnderlineText'>JavaFX</span>.</p>
                        </h4>
                    </div>
                    {/* use case */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Use Cases</h3>
                        <div className='text-white text-lg pt-6 pb-10 tracking-wider'>
                            <h4>The following use cases are determined to address the system usage:</h4>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400'>
                                <li><span className='projectSlideHighlightText'>Search Train</span>: Get train schedule from departure and arrival information.</li>
                                <li><span className='projectSlideHighlightText'>Ticket Generation</span>: Output ticket(s) from train information. Designed to be called by other use cases.</li>
                                <li><span className='projectSlideHighlightText'>Book Ticket</span>: Generate new ticket(s) from train information.</li>
                                <li><span className='projectSlideHighlightText'>Search Ticket</span>: Get ticket(s) from booking ID or train information.</li>
                                <li><span className='projectSlideHighlightText'>Revise Ticket</span>: Revise ticket(s) information after search ticket process.</li>
                            </ul>
                            <div className='flex flex-col'>
                            {/* image: flow designed */}
                                <figure className='flex flex-row justify-center py-4'>
                                    <Image
                                    src="/oop-use-case.png"
                                    loader={imageLoader}
                                    width={866}
                                    height={257}
                                    alt='use-case'
                                    ></Image>
                                </figure>
                                <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Use case diagram</caption>
                            </div>
                        </div>
                    </div>
                    {/* interaction */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Interaction Diagram</h3>
                        <div className='text-white font-semibold text-lg pt-6 pb-10 tracking-wider space-y-2'>
                            <p>We drew communication diagrams to showcase the <span className="projectSlideUnderlineText">API calls sequence</span> among different classes of <span className="projectSlideUnderlineText">Boundaries, Controllers and Entities</span>.</p>
                            <p>By applying the MVC model, the data flow we designed obey: UI →Controller →Data Access Object (DAO) →Database.</p>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400 font-bold'>
                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Search Train</span></p>
                                    <p>Returns a list of &quot;TrainTime&quot; to UI.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Search Train interaction */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-search-train-interaction.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interaction diagram - Search Train</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Generate Ticket</span></p>
                                    <p><span className='italic'>STEP 1</span>: Passes &quot;info&quot; entity and returns a &quot;TrainTime&quot; list to build UI.</p>
                                    <p><span className='italic'>STEP 2</span>: Users can select a &quot;TrainTime&quot; from UI listed in STEP1, and the controller can return an &quot;order&quot; entity to the use case that calls <span className="projectSlideUnderlineText">Generate Ticket</span>.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Generate Ticket interaction */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-generate-ticket-interaction.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interaction diagram - Generate Ticket</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Book Ticket</span></p>
                                    <p><span className='italic'>STEP 1</span>: Passes &quot;info&quot; entity to <span className="projectSlideUnderlineText">Generate Ticket</span> and gets the &quot;order&quot; entity.</p>
                                    <p><span className='italic'>STEP 2</span>: UI then displays a prompt for the user to confirm the &quot;order&quot;. The selection leads to CRUD operations in the controller to deal with the &quot;order&quot;.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Book Ticket interaction */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-book-ticket-interaction.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interaction diagram - Book Ticket</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Search Ticket by Order ID</span> (Search Reserve)</p>
                                    <p><span className='italic'>STEP 1</span>: Returns &quot;order&quot; entity to UI.</p>
                                    <p><span className='italic'>STEP 2</span>: UI then displays a prompt for the user to confirm the &quot;order&quot;. If user selects the revision option, enter <span className="projectSlideUnderlineText">Revise Reserve</span>.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Search Reserve interaction */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-search-reserve-interaction.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interaction diagram - Search Reserve</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Revise Ticket</span> (Revise Reserve)</p>
                                    <p><span className='italic'>STEP 1</span>: Passes &quot;info&quot; entity to <span className="projectSlideUnderlineText">Generate Ticket</span> and get the &quot;order&quot; entity.</p>
                                    <p><span className='italic'>STEP 2</span>: UI then displays a prompt for the user to confirm the &quot;order&quot;. Operate modify/delete method in controller if confirmed.</p>
                                    <p><span className='italic'>STEP 3</span>: Releases legacy &quot;order&quot; entity after new &quot;order&quot; is written by DAO into Database.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Revise Reserve interaction */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-revise-reserve-interaction.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interaction diagram - Revise Reserve</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Search Ticket By Book ID</span> (Search Book ID)</p>
                                    <p>Returns a list of &quot;orders&quot; to UI. A simple and independent use case that differs from <span className="projectSlideUnderlineText">Search Reserve</span>.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Search BookID interaction */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-search-bookid-interaction.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interaction diagram - Search Book ID</caption>
                                </div>


                            </ul>
                        </div>
                    </div>
                    {/* class */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Class & Database Design</h3>
                        <div className='text-white font-semibold text-lg pt-6 pb-10 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400 font-bold'>
                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Boundary & Controller Class Diagram</span></p>
                                    <p><span className='italic'>STEP 1</span>: The controller class calls startInterface() to launch the corresponding boundary class(UI).</p>
                                    <p><span className='italic'>STEP 2</span>: UI then sets up listeners to monitor user operations.</p>
                                    <p><span className='italic'>STEP 3</span>: UI passes API calls to the controller in response to user operations. Further communications are listed in interaction diagrams.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Boundary/Controller Class */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-boundary-controller-class.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Class diagram - Boundary & Controller</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">Entity Class Diagram</span></p>
                                    <p><span className='italic'>TYPE 1</span>: For ease to use in controllers.(e.g. &quot;Info&quot;)</p>
                                    <p><span className='italic'>TYPE 2</span>: For enumerations or categorization purposes.(e.g. &quot;CarType&quot;)</p>
                                    <p><span className='italic'>TYPE 3</span>: For simulation of real objects that reflect from Database.(e.g. &quot;Ticket&quot;, &quot;Order&quot;)</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: Entity Class */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-entity-class.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Class diagram - Entity</caption>
                                </div>

                                <li className='space-y-2'>
                                    <p><span className="projectSlideUnderlineText">ER Diagram</span></p>
                                    <p>We use 3NF to refine our database design.</p>
                                    <p>Important entities are designed reflective in the database for DAO to extract data as objects.</p>
                                </li>
                                <div className='flex flex-col pb-4'>
                                {/* image: ER diagram */}
                                    <figure className='flex flex-row justify-center py-4'>
                                        <Image
                                        src="/oop-er-diagram.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='use-case'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>ER diagram</caption>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* final design */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>final design</h3>
                        <div className='text-white text-lg py-6 space-y-8 tracking-wider'>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>1</span> <span className='projectSlideHighlightText'>Book Ticket Flow</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <ul className='list-decimal pl-6 space-y-2'>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Ticket Inquiry</span>: User inputs ticket information fields.</li>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Choose Ticket(s)</span>: User chooses available tickets.</li>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Preview Order</span>: User can preview tickets of the currently booked order.</li>
                                    </ul>
                                    <figure className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/oop-final-book-ticket.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='typhoon-card'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Book ticket UI flow</caption>
                                </ul>
                            </div>

                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>2</span> <span className='projectSlideHighlightText'>Search Ticket Flow</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <ul className='list-decimal pl-6 space-y-2'>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Order Inquiry</span>: User inputs booked ticket information fields.</li>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Preview Order</span>: User can preview tickets of booked order(s).</li>
                                    </ul>
                                    <figure className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/oop-final-search-ticket.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='typhoon-card'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Search ticket UI flow</caption>
                                </ul>
                            </div>
                            
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>3</span> <span className='projectSlideHighlightText'>Revise Ticket Flow</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <ul className='list-decimal pl-6 space-y-2'>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Trigger</span>: Revise ticket events can be triggered by the &quot;Revise Button&quot; in the Preview page from the above 2 cases.</li>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Ticket Inquiry</span>: User inputs new booking time.</li>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Choose Tickets</span>: User chooses newly available tickets to replace the ones in the old order.</li>
                                        <li><span className='p-1 font-bold text-white/80 border-blue-300 border-2'>Preview Order</span>: User can preview tickets of new booked order(s).</li>
                                    </ul>
                                    <figure className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/oop-final-revise-reserve.png"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='typhoon-card'
                                        ></Image>
                                    </figure>
                                    <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Revise ticket UI flow</caption>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*footer*/}
                    <div className="flex flex-row items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">                        
                        <button className='uppercase bg-blue-300 rounded-md text-black py-2 px-4 font-bold'
                        onClick={() => obj.setShowModal(false)}>
                        close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </motion.div></>
        
    )
}
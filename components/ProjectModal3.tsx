import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {setShowModal: any}
const imageLoader = require("../pages/api/imageLoader.js");

export default function ProjectModal(obj: Props) {
    
    return (
        <><motion.div
        initial={{scale: 0.1, opacity: 0.1}}
        transition={{duration: 0.2}}
        whileInView={{scale: 1, opacity: 1}}
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
                            Short Paper: An Investigation of Cyber Autonomy on Government Websites
                            </h3>
                            <h4 className='pt-2 font-semibold tracking-wider text-center'>
                            Investigated autonomy issues among G7 government websites in cyber security aspect
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
                        className='rounded-lg border-slate-500 border-2'
                        src="/autonomy-overview.jpg"
                        loader={imageLoader}
                        width={704}
                        height={545}
                        alt='autonomy-overview'
                        ></Image>
                    </div>
                    {/* overview */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Overview</h3>
                        <h4 className='text-white text-lg pt-6 pb-10 tracking-wider'>
                            <p><span className='projectSlideUnderlineText'>Short paper published on The World Wide Web Conference, May 2019.</span> <a href="https://dl.acm.org/doi/fullHtml/10.1145/3308558.3313645" className='text-slate-400'>[Publication link]</a></p>
                            <p>During my special research project, I and my teamates scanned through G7 government top 100 websites. We used the data to analyze three major cyber autonomy indicators:                                <span className='projectSlideHighlightText'>HTTPS</span>, <span className='projectSlideHighlightText'>Certificate Authority</span> and <span className='projectSlideHighlightText'>Content Provider</span>.</p>
                            <p>We further went to San Francisco, California to demonstrate our work. I was also responsible for the oral presentation at the scene.</p>
                            <figure className='flex flex-row justify-center py-4'>
                                <Image
                                src="/web-conf-photo.jpg"
                                loader={imageLoader}
                                width={400}
                                height={100}
                                alt='web-conf-photo'
                                ></Image>
                            </figure>
                            <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Team photo in San Francisco, WWW&apos;19</caption>
                        </h4>
                    </div>
                    {/* problems */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Research Problems</h3>
                        <div className='flex flex-row flex-wrap pt-6 pb-10'>
                            <div className='flex flex-col text-white text-lg tracking-wider lg:max-w-[50%] md:max-w-[100%]'>
                                <h4>Cyber autonomy is crucial to reduce the reliance on external entities. Public-facing government websites indicate <span className='projectSlideUnderlineText'>the degree of government&apos;s autonomy policy</span>. With the website data we crawled, following investigations should be conducted to further analyze the dependencies.</h4>
                                <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400'>
                                    <li><span className='projectSlideHighlightText'>HTTPS/HSTS</span>: Whether a website adopts HTTPS protocol and HSTS mechanism is a strong cyber security protection indicator.</li>
                                    <li><span className='projectSlideHighlightText'>TLS Vulnerabilities (Weakness)</span>: A detailed top 11 cyber attacks vulnerabilities result reveals the maintenance quality of these sites.</li>
                                    <li><span className='projectSlideHighlightText'>Root Certificate Authority (Root CA)</span>: With those websites already adopted HTTPS, analyzing the institutions who issued their certificate brings out autonomy aspect of nations.</li>
                                    <li><span className='projectSlideHighlightText'>Content Provider (CP)</span>: The most important factor about autonomy, which we geologically positioned the server storing these website data.</li>
                                </ul>
                            </div>
                            <div className='flex flex-col pl-4 lg:max-w-[50%] md:max-w-[100%] mx-auto'>
                            {/* image: flow designed */}
                                <figure className='flex flex-row justify-center py-4'>
                                    <Image
                                    src="/www_poster.png"
                                    loader={imageLoader}
                                    width={400}
                                    height={257}
                                    alt='www_poster'
                                    ></Image>
                                </figure>
                                <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Conference poster, Factors of cyber autonomy</caption>
                            </div>
                        </div>
                    </div>
                    {/* technical */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Technical investigation & survey</h3>
                        <div className='text-white font-semibold text-lg pt-6 pb-10 tracking-wider'>
                            <ul className='list-decimal pl-6 py-4 space-y-4 marker:text-blue-400 font-bold'>
                                <li><span className='projectSlideHighlightText'>Scan & Crawl</span>: We used crawling techniques to collect top 100 viewed government websites overed 8 countries. Thereafter, we scanned over the 800 sites to detect their environment settings.</li>
                                <li><span className='projectSlideHighlightText'>Analyze</span>: I integrated all research data into different chart styles for comparison purpose in demonstration and further analysis.</li>
                                <table className='w-full'>
                                    <thead>
                                        <tr className='bg-blue-400/80'>
                                            <th></th>
                                            <th>HTTPS</th>
                                            <th>HSTS</th>
                                            <th>Weak&shy;ness</th>
                                            <th>Root CA</th>
                                            <th>CP</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-slate-800/80'>
                                        <tr>
                                            <td>G7 Overall</td>
                                            <td>Bar</td>
                                            <td>Bar</td>
                                            <td>Line</td>
                                            <td>Bar</td>
                                            <td>Bar</td>
                                        </tr>
                                        <tr>
                                            <td>Each country</td>
                                            <td>Pie</td>
                                            <td>Pie</td>
                                            <td>Bar</td>
                                            <td>Pie</td>
                                            <td>Pie</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <li><span className='projectSlideHighlightText'>Survey & Research</span>: Our team distributed questionaire directly to Taiwanese government institutions as well as search for G7 government mandates documents.</li>
                                <li><span className='projectSlideHighlightText'>Draw conclusion</span>: We combine technical research with humanities studies to find out autonomy tendencies among G7 and the potential crisis of the ignorance!</li>
                            </ul>
                        </div>
                    </div>
                    {/* final design */}
                    <div className='px-20 py-16'>
                        <h3 className='text-2xl text-white py-8 uppercase font-bold tracking-[0.3rem]'>Demonstration website design</h3>
                        <div className='text-white text-lg py-6 space-y-8 tracking-wider'>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>1</span> <span className='projectSlideHighlightText'>Bar charts</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>For comparison of adoption percentage among G7 countries, <span className='projectSlideUnderlineText'>bar charts are best to display the overview</span>.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/autonomy-bar.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='autonomy-bar'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Bar chart for most overall comparison</caption>
                                    </div>
                                    <li>Each independent <span className='projectSlideUnderlineText'>bar is clickable</span>, and the according websites will be showed.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/autonomy-website-list.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='autonomy-website-list'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Interactive listing with charts</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                                <p><span className='border-2 border-blue-400 text-blue-400 p-1'>2</span> <span className='projectSlideHighlightText'>Line Charts</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>Chose specifically for TLS vulnerabilities overall comparison section. Due to <span className='projectSlideUnderlineText'>11 categories of attacks</span> in each countries, I need <span className='projectSlideUnderlineText'>one more dimension for data display</span> rather than bar chart.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/autonomy-line.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='autonomy-line'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Line chart for TLS vulnerability overall comparison</caption>
                                    </div>
                                    <li><span className='projectSlideUnderlineText'>Every node on each line is also clickable</span>, and full website vulnerabilities are viewable.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/autonomy-weakness-list.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='autonomy-weakness-list'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Popup table for detail view</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                            <p><span className='border-2 border-blue-400 text-blue-400 p-1'>3</span> <span className='projectSlideHighlightText'>Pie Charts</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>Clickable pie charts are used to lucidly show the adoption rate for specific country at a time spot.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        src="/autonomy-pie.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='autonomy-pie'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Pie chart for specific rate display</caption>
                                    </div>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start py-4 space-x-1 space-y-2 text-lg'>
                            <p><span className='border-2 border-blue-400 text-blue-400 p-1'>4</span> <span className='projectSlideHighlightText'>Poster Design</span></p>
                                <ul className='px-8 list-disc space-y-2'>
                                    <li>I further attended Annual CSIE Project Research Exhibition. My team won both Appier Inc. and QNAP Systems Inc excellence awards.</li>
                                    <li>Besides demo website, I also designed the poster for the exhibition.</li>
                                    <div className='flex flex-col py-4 justify-center'>
                                        <Image
                                        className='border-2 border-blue-400'
                                        src="/exhibition-poster.jpg"
                                        loader={imageLoader}
                                        width={866}
                                        height={257}
                                        alt='exhibition-poster'
                                        ></Image>
                                        <caption className='flex flex-row text-center justify-center text-sm text-gray-300'>Exhibition poster</caption>
                                    </div>
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
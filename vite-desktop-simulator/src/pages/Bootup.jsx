import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import './Bootup.css';

function Bootup() {
    const logRef = useRef(null);
    const pressKeyRef = useRef(null);
    const cursorRef = useRef(null);
    const navigate = useNavigate();

    // to prevent run() from running twice
    const hasRun = useRef(false);
    const lines = [
        { text: 'CPU: Intel(R) Pentium(R) 2.80GHz', color: '', delay: 200 },
        { text: "Erika OS Version 1.1", delay: 200 }
    ]

    // Helper to pause execution for a given number of milliseconds
    function sleep(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    function addLine(text, color) {
        const div = document.createElement('div'); //create new div element
        div.className = 'bootup-line'; //give it a class name of bootup content to apply css
        if (color) div.classList.add(color); // if it has color, add a second class to it 'bootup-content red"
        div.textContent = text;
        logRef.current.appendChild(div); //gets current log and appends the created div with text

    }

    // Main function that runs all the text lines in sequence
    async function run() {
        await sleep(400); // brief pause before starting

        for (const entry of lines) {
            await sleep(entry.delay); // wait the specified delay for each line

            if (entry.ramBar) {
                await animateRamBar(); // special case: show RAM bar
            } else {
                addLine(entry.text, entry.color); // normal case: show text line
            }
        }

        // Hide blinking cursor and show "Press any key" when all lines are done
        cursorRef.current.style.display = 'none';
        pressKeyRef.current.style.display = 'block';
    }



    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        async function runAndListen() {
            await run();

        const handleKey = () => {
            if (pressKeyRef.current?.style.display === 'block') {
                navigate('/desktop');
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
        }
        runAndListen();

    }, []);


    return (
        <div className="bootup-container">
            <div className="bootup-content">
                <div id="log" ref={logRef}></div>
                <span className="cursor" ref={cursorRef}></span>
                <div className="press-key" ref={pressKeyRef}>Press any key to continue...</div>
            </div>
        </div>
    );
}
export default Bootup;
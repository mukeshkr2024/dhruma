import { useEffect, useState } from "react"

interface TicketProps {
    festivalName?: string
    location?: string
    days?: string
    dateRange?: string
    targetDate?: Date
}

export const FilmFestivalTicket = ({
    festivalName = "DHRUMA FILM FESTIVAL",
    location = "DARJEELING",
    days = "3 DAY",
    dateRange = "15th-18th JUNE",
    targetDate = new Date(new Date().getTime() + 27 * 24 * 60 * 60 * 1000), // Default 27 days from now
}: TicketProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    // Format numbers to always have two digits
    const formatNumber = (num: number) => {
        return num.toString().padStart(2, "0")
    }

    return (
        <div className="w-full px-8">
            <div className="relative bg-[#d8e1e8] rounded-lg overflow-hidden">
                {/* Ticket shape with notches */}
                <div className="relative">
                    {/* Top notches */}
                    <div className="absolute top-0 left-1/4 w-8 h-4 bg-[#F9FFF1] rounded-b-full"></div>
                    <div className="absolute top-0 right-1/4 w-8 h-4 bg-[#F9FFF1] rounded-b-full"></div>

                    {/* Bottom notches */}
                    <div className="absolute bottom-0 left-1/4 w-8 h-4 bg-[#F9FFF1] rounded-t-full"></div>
                    <div className="absolute bottom-0 right-1/4 w-8 h-4 bg-[#F9FFF1] rounded-t-full"></div>

                    {/* Side notches */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 h-8 w-4 bg-[#F9FFF1] rounded-r-full"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 h-8 w-4 bg-[#F9FFF1] rounded-l-full"></div>

                    {/* Main ticket content */}
                    <div className="flex flex-col md:flex-row">
                        {/* Left side */}
                        <div className="relative p-6 md:w-2/3 flex flex-col">
                            {/* Background mountains */}
                            {/* <div className="absolute inset-0 opacity-30 z-0">
                                <img src="/mountain.png" alt="Mountains" className="object-cover" />
                            </div> */}

                            {/* Festival name */}
                            <h1 className="text-[#2a4187] text-4xl md:text-5xl font-bold tracking-wider z-10 mb-4">{festivalName}</h1>

                            {/* Center logo */}
                            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center border-2 border-gray-300">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f5f5f5] flex items-center justify-center text-xs text-center p-2">
                                        DHRUMA FILM FESTIVAL
                                    </div>
                                </div>
                            </div> */}

                            {/* Bottom info */}
                            <div className="mt-auto flex justify-between items-center z-10 pt-16">
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-2 text-[#2a4187] font-bold text-xl">{location}</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#2a4187] font-bold text-xl">{days}</div>
                                </div>
                                <div className="text-[#2a4187] font-bold text-xl">{dateRange}</div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative mx-auto md:mx-0">
                            <div className="hidden md:block w-0 h-full border-l-2 border-dashed border-black"></div>
                            <div className="md:hidden h-0 w-full border-t-2 border-dashed border-black"></div>
                        </div>

                        {/* Right side */}
                        <div className="p-6 md:w-1/3 flex flex-col items-center justify-center">
                            <h2 className="text-[#2a4187] text-3xl font-bold tracking-wider mb-8">REGISTER</h2>

                            {/* Countdown timer */}
                            <div className="flex justify-center space-x-2 md:space-x-4">
                                <div className="text-center">
                                    <div className="text-red-500 text-xl md:text-2xl font-bold">
                                        {timeLeft.days.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-xs text-gray-600">DAY</div>
                                </div>
                                <div className="text-red-500 text-xl md:text-2xl font-bold">:</div>
                                <div className="text-center">
                                    <div className="text-red-500 text-xl md:text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
                                    <div className="text-xs text-gray-600">HOUR</div>
                                </div>
                                <div className="text-red-500 text-xl md:text-2xl font-bold">:</div>
                                <div className="text-center">
                                    <div className="text-red-500 text-xl md:text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
                                    <div className="text-xs text-gray-600">MIN</div>
                                </div>
                                <div className="text-red-500 text-xl md:text-2xl font-bold">:</div>
                                <div className="text-center">
                                    <div className="text-red-500 text-xl md:text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
                                    <div className="text-xs text-gray-600">SEC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

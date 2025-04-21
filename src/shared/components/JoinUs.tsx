import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
});

export const JoinUs = () => {
    return (
        <motion.section
            className="flex max-w-5xl mx-auto flex-col gap-y-8 md:gap-y-16 py-12 md:py-20 items-center justify-center px-4 md:px-0"
            {...fadeInUp()}
        >
            <motion.h2 className="primary-heading" {...fadeInUp(0.2)}>
                Join us
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row gap-6 md:gap-14"
                {...fadeInUp(0.4)}
            >
                <Ticket
                    title="Flexible passes for every film lover"
                    passes={["Single Screening", "Day Pass", "Full Festival Pass"]}
                    price="$99"
                    label="Passes"
                    bgImage="/join_1_bg.svg"
                />
                <Ticket
                    title="All-access experience."
                    passes={[
                        "Enjoy priority seating, exclusive events, and full access to all screenings throughout the festival",
                    ]}
                    price="$199"
                    label="VIP Pass"
                    bgImage="/join_2_bg.svg"
                />
            </motion.div>
        </motion.section>
    );
};

type TicketProps = {
    title: string;
    passes: string[];
    price: string;
    label: string;
    bgImage: string;
};

const Ticket = ({ title, passes, price, label, bgImage }: TicketProps) => {
    return (
        <div
            className="w-[315px] h-[515px] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full h-full flex flex-col justify-between p-10">
                <h4 className="font-primary text-2xl uppercase text-white leading-tight">
                    {title}
                </h4>

                <div className="font-secondary text-base text-white space-y-1">
                    {passes.map((pass, idx) => (
                        <div key={idx}>{pass}</div>
                    ))}
                </div>

                <div className="flex flex-col font-secondary">
                    <span className="text-sm text-white">Prices starting at:</span>
                    <span className="text-6xl text-white leading-tight">{price}</span>
                </div>

                <span className="font-primary text-4xl text-white uppercase leading-tight">
                    {label}
                </span>
            </div>
        </div>
    );
};

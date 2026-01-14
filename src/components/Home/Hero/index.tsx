import { withBasePath } from '@/utils/urlHelper'
import Image from 'next/image'

const WavyArrow = () => (
    <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
            >
                <polygon points="0 0, 10 3.5, 0 7" fill="#1444EF" />
            </marker>
        </defs>
        <path
            d="M5 30 C 25 10, 45 50, 65 30 S 95 10, 115 30"
            stroke="#1444EF"
            strokeWidth="3"
            strokeDasharray="6 6"
            fill="none"
            markerEnd="url(#arrowhead)"
        />
    </svg>
);

const Banner = () => {
    return (
        <section className="bg-header pt-36 pb-24 overflow-hidden">
            <div className="container px-4 mx-auto">

                {/* ---------- TOP ROW ---------- */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <h3 className="text-midnight_text text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">
                        Company Formation, Crypto & FinTech Licenses
                        <span className="text-primary"> with your personal legal team</span>
                    </h3>

                    <p className="text-black/70 mt-4 text-sm md:text-base">
                        Start and scale your business with globally experienced lawyers.
                        We assist with company registration, crypto licensing, banking & payment institution licenses,
                        and full legal compliance worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <button className="bg-primary text-white text-lg font-semibold py-4 px-8 rounded-full transition hover:bg-primary/90">
                            Get professional advice
                        </button>

                        <button className="border border-primary text-primary text-lg font-semibold py-4 px-8 rounded-full transition hover:bg-primary hover:text-white">
                            Explore all services
                        </button>
                    </div>

                    <div className="mt-6 text-sm text-black/60">
                        Trusted by startups, fintech companies & crypto projects worldwide
                    </div>
                </div>

                {/* ---------- BOTTOM ROW (STEPS + ARROWS) ---------- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20 max-w-6xl mx-auto">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={withBasePath('/images/steps/1-Concept-to-Guidance_illustration.png')}
                            alt="Concept to Guidance"
                            width={220}
                            height={220}
                        />
                        <h3 className="mt-4 font-semibold text-lg">Concept to Guidance</h3>
                        <p className="text-sm text-black/60 mt-2">
                            We analyze your idea and define the best legal & licensing strategy.
                        </p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="hidden md:block">
                        <WavyArrow />
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={withBasePath('/images/steps/2-Legal-Project-Management_illustration.png')}
                            alt="Legal Project Management"
                            width={220}
                            height={220}
                        />
                        <h3 className="mt-4 font-semibold text-lg">Legal Project Management</h3>
                        <p className="text-sm text-black/60 mt-2">
                            Our legal team handles filings, compliance, and authorities end-to-end.
                        </p>
                    </div>

                    {/* Arrow 2 */}
                    <div className="hidden md:block">
                        <WavyArrow />
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={withBasePath('/images/steps/3-On-going-Business-Support_illustration.png')}
                            alt="On-going Business Support"
                            width={220}
                            height={220}
                        />
                        <h3 className="mt-4 font-semibold text-lg">On-going Business Support</h3>
                        <p className="text-sm text-black/60 mt-2">
                            Continuous legal, compliance, and operational support as you grow.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner

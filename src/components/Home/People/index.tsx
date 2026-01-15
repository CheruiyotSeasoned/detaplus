import Image from 'next/image'
import Link from 'next/link'
import { withBasePath } from '@/utils/urlHelper'

const People = () => {
    return (
        <section className="py-20 xl:py-28 bg-others-gray-40"  id="about-us-section">
            <div className="container flex flex-col xl:flex-row gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="xl:w-1/2 flex flex-col gap-6">

                    <div className="flex flex-col gap-1">
                        <span className="uppercase text-[#814AC8] dark:text-[#9D6EDB] font-semibold tracking-wide">
                            About us
                        </span>
                        <h2 className="text-midnight_text text-3xl md:text-4xl font-bold">
                            Your personal legal team in your pocket
                        </h2>
                    </div>

                    <p className="text-white/70 leading-relaxed">
                        Detaplus is committed to providing top-tier corporate legal services with a high degree
                        of transparency for clients all over the globe. We foster FinTech projects and
                        international business activities through company registration, crypto-related
                        compliance assistance, and other services that help you obtain financial licenses.
                    </p>

                    <div className="bg-white px-6 py-3 rounded-xl text-[#814AC8] dark:text-[#9D6EDB] text-sm font-semibold w-fit">
                        Get company formations, VASP & FinTech Licenses at reasonable fixed costs
                    </div>

                    <div className="pt-2 hidden xl:block">
                        <Link
                            href="/about-us"
                            className="inline-flex items-center justify-center bg-[#814AC8] dark:bg-[#9D6EDB] text-white px-6 py-3 rounded-full font-medium hover:bg-[#814AC8]/90 transition"
                        >
                            Learn about Detaplus
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="xl:w-1/2 flex justify-center xl:justify-end">
                    <Image
                        src={withBasePath('/images/about/lineart.svg')}
                        alt="Your personal legal team in your pocket"
                        width={356}
                        height={337}
                        className="h-full w-auto fill-[#814AC8] dark:fill-[#9D6EDB]"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}

export default People

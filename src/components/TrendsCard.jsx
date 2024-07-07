import { TwitterTrends } from "../assets/TrendsTw.jsx";

export function ListTrendsCard() {
    return(
        <section className="tw-TrendsCard">
            <h2><strong>Publicaciones para ti</strong></h2>
            <TwitterTrends name="#leetcode" posts={200}>Treding</TwitterTrends>
            <TwitterTrends name="#leetcode" posts={200}>Treding</TwitterTrends>
            <TwitterTrends name="#leetcode" posts={200}>Treding</TwitterTrends>
            <TwitterTrends name="#leetcode" posts={200}>Treding</TwitterTrends>
            <a href="" className="more-trends">Ver más</a>
        </section>
    )
}
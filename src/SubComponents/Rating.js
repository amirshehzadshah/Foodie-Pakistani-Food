import { AiFillStar, AiOutlineStar } from "react-icons/ai"

function Rating({ rating }) {
    return (
        <>
            {
                [...Array(5)].map(
                    (_, i) => (
                        <span key={i}>
                            {rating > i
                                ? (
                                    <AiFillStar className="ratingStar" />
                                )
                                : (
                                    <AiOutlineStar className="ratingStar" />
                                )}
                        </span>
                    )
                )
            }
        </>
    )
}
export default Rating;
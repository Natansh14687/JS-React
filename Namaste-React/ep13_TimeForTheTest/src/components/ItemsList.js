import { CARD_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = (props) => {
    // console.log(props);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    
    return (
        <div className="px-5">
            {props.items.map((item) => (
                // <div key={item.card.info.name} className="border-b-1 border-gray-300 py-4">
                //     <div className="flex justify-between">
                //         <div>
                //             <div className="font-bold text-gray-700">{item.card.info.name}</div>
                //             <div className="font-bold">₹ {(item.card.info.price || item.card.info.defaultPrice)/100}</div>
                //             <div className="text-sm text-gray-500 mt-2">{item.card.info.description}</div>
                //         </div>
                //         <div className="w-5/12 p-4">
                //             <div className="absolute">
                //                 <button className="bg-white text-green-700 font-extrabold text-lg py-3 px-6 mx-4 rounded-lg cursor-pointer">Add</button>
                //             </div>
                //             <img src={CARD_IMG_URL+item.card.info.imageId} className="w-full" />
                            
                //         </div>
                //     </div>
                // </div>

                <div key={item.card.info.id} className="border-b border-gray-300 py-4">
                    <div className="flex justify-between">
                        <div className="flex-1 pr-4">
                            <div className="font-bold text-gray-700">{item.card.info.name}</div>
                            <div className="font-bold">
                                ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                                {item.card.info.description}
                            </div>
                        </div>

                            {/* Image container */}
                        <div className="relative w-40 h-32 overflow-hidden rounded-lg">
                            <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white hover:bg-green-100 hover:text-green-800 text-green-700 font-extrabold text-lg py-2 px-4 rounded-lg cursor-pointer shadow" onClick={() => handleAddItem(item)}>
                                Add
                            </button>
                            <img
                                src={CARD_IMG_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default ItemsList;
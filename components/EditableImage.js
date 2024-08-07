import { useState } from "react";
import UserIcon from "./icons/UserIcon";
import Backdrop from "./Backdrop";

export default function EditableImage(image, setImage) {
	const [fullImage, setFullImage] = useState(false);

	console.log(image);
	return (
		<div className="p-2 inline-flex items-center flex-col gap-2">
			<div className="rounded-full flex items-center justify-center bg-gray-200 p-1 size-[120px] shadow-lg">
				{image ? (
					<>
						<img
							className="w-full h-full object-cover rounded-full cursor-pointer"
							src={image}
							alt=""
						/>
						{fullImage && <Backdrop></Backdrop>}
					</>
				) : (
					<UserIcon className="text-gray-500" />
				)}
			</div>
			<label className="bg-white border-2 shadow-lg text-center py-1 rounded-md hover:scale-105 transition delay-150 duration-300 cursor-pointer w-full">
				<input type="file" accept="image/*" className="hidden" />
				<span>Edit</span>
			</label>
		</div>
	);
}

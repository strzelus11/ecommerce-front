import Link from "next/link";

export default function AuthButton() {
	return (
		<div className="flex flex-col justify-center items-center px-5 py-3">
			<h3 className="text-center whitespace-nowrap mb-3">
				You're not authenticated
			</h3>
			<div className="flex gap-3">
				<Link href="/login">
					<button className="btn-primary">Login</button>
				</Link>
				<Link href="/register">
					<button className="btn-secondary">Register</button>
				</Link>
			</div>
		</div>
	);
}

import AccountLayout from "@/components/AccountLayout";
import AuthButton from "@/components/AuthButton";
import Spinner from "@/components/Spinner";
import UserForm from "@/components/UserForm";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
	const session = useSession();

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		if (session.status === "authenticated") {
			axios.get("/api/profile").then((response) => {
				setUser(response.data);
				setLoading(false);
			});
		}
	}, [session, session.status]);

	return (
		<AccountLayout title="Profile information">
			{session.status === "authenticated" ? (
				loading ? (
					<Spinner />
				) : (
					<UserForm user={user} />
				)
			) : (
				<AuthButton />
			)}
		</AccountLayout>
	);
}

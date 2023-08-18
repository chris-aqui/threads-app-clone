import { currentUser } from "@clerk/nextjs";

import UserCard from "../cards/UserCard.component";

import { fetchCommunities } from "@/lib/actions/community.actions";
import { fetchUsers } from "@/lib/actions/user.actions";
import { Key } from "react";

async function RightSidebar() {
	const user = await currentUser();
	if (!user) return null;

	// const similarMinds = await fetchUsers({
	// 	userId: user.id,
	// 	pageSize: 4,
	// });

	// const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });

	return (
		<section className='custom-scrollbar rightsidebar'>
			<div className='flex flex-1 flex-col justify-start'>
				<h3 className='text-heading4-medium text-light-1'>
					Suggested Communities
				</h3>

				<div className='mt-7 flex w-[350px] flex-col gap-9'>
					Demo suggestedCOmmunities
					{/* {suggestedCOmmunities.communities.length > 0 ? (
						<>
							{suggestedCOmmunities.communities.map((community: { id: Key | null | undefined; name: string; username: string; image: string; }) => (
								<UserCard
									key={community.id}
									id={community.id ? community.id.toString() : ''}
									name={community.name}
									username={community.username}
									imgUrl={community.image}
									personType='Community'
								/>
							))}
						</>
					) : (
						<p className='!text-base-regular text-light-3'>
							No communities yet
						</p>
					)} */}
				</div>
			</div>

			<div className='flex flex-1 flex-col justify-start'>
				<h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
				<div className='mt-7 flex w-[350px] flex-col gap-10'>
					demo similarMinds
					{/* {similarMinds.users.length > 0 ? (
						<>
							{similarMinds.users.map((person: { id: Key | null | undefined; name: string; username: string; image: string; }) => (
								<UserCard
									key={person.id}
									id={person.id ? person.id.toString() : ''}
									name={person.name}
									username={person.username}
									imgUrl={person.image}
									personType='User'
								/>
							))}
						</>
					) : (
						<p className='!text-base-regular text-light-3'>No users yet</p>
					)} */}
				</div>
			</div>
		</section>
	);
}

export default RightSidebar;

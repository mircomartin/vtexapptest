import React from 'react'

import PROFILE from './graphql/userProfile.graphql'
import { useQuery } from 'react-apollo'

const AppTest = () => {

	const { data: profileData, loading: loadingProfile, error: profileError } = useQuery(PROFILE, {
		fetchPolicy: 'network-only'
	})

	return (

		<div className="mt5">
			{
				profileData && !loadingProfile && !profileError
				&&
				<div>
					{profileData.profile.email}
				</div>
			}
		</div>
			
	)
}

export default AppTest

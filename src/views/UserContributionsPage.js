import React, { useState, useEffect } from 'react';
// ContributionItem 컴포넌트 누락으로 인해 임시 주석 처리
// import ContributionItem from '../components/ContributionItem';
import { getUserProfile } from '../services/userService'; // 사용자 프로필 정보를 가져오는 함수 사용 변경
import '../styles/UserContributionsPage.scss';

function UserContributionsPage() {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const data = await getUserProfile(); // 사용자 프로필 정보를 가져오는 함수 사용 변경
                setUserProfile(data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        }

        fetchUserProfile();
    }, []);

    return (
        <div className="user-contributions-page">
            <h1>Your Contributions</h1>
            <div className="contributions-list">
                {/* ContributionItem 컴포넌트 누락으로 인해 임시 주석 처리
                {contributions.map(contribution => (
                    <ContributionItem key={contribution.id} contribution={contribution} />
                ))} */}
                <p>No contributions found.</p>
            </div>
        </div>
    );
}

export default UserContributionsPage;

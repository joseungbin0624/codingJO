import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategories } from '../store/categoriesSlice';
import CategoryItem from '../components/CategoryItem';
import '../styles/CategoryPage.scss'; // 정확한 경로 확인
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories); // 수정: 실제 셀렉터 함수 이름으로 변경
    const navigate = useNavigate(); // 수정: 변수명 변경

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleCategoryClick = (categoryId) => {
        navigate(`/categories/${categoryId}`);
    };

    return (
        <div className="category-page">
            {/* 기타 내용 */}
        </div>
    );
};

export default CategoryPage;

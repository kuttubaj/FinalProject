import React from 'react';

function HomeSectionNews() {
return (
    <div className="home-section-news">
      {/* Левая часть - Breaking News */}
    <div className="left">
        <div className="title-text">
        <h2>Breaking News</h2>
        </div>
        <div className="image">
        <img
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/best_sports_cars.jpg?itok=3j2gR3KR"
            alt="car"
        />
        </div>
        <div className="content">
        <div className="title">
            <h3>
            <a
                href="https://www.autocar.co.uk/car-news/best-cars/top-10-best-sports-cars"
                target="_blank"
                rel="noopener noreferrer"
            >
                Лучшие спортивные автомобили — проверенные, оцененные и ранжированные
            </a>
            </h3>
        </div>
        <div className="descr">
            <p>
            Выше представлен окончательный список из 10 лучших спортивных автомобилей, которые сейчас продаются. Лучшим может оказаться только один из них...
            </p>
        </div>
        </div>
    </div>

      {/* Правая часть - Top NEWS */}
    <div className="right">
        <div className="title-text">
        <h2>Top NEWS</h2>
        </div>
        <div className="top-news">
        <div className="news">
            <div className="image">
            <img
                src="/assets/breaking_news_bg.jpg"
                alt="breaking news"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</p>
            </div>
            </div>
        </div>

        <div className="news">
            <div className="image">
            <img
                src="/assets/table-tennis.jpg"
                alt="table tennis"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptatum.</p>
            </div>
            </div>
        </div>

        <div className="news">
            <div className="image">
            <img
                src="/assets/boxing.jpg"
                alt="boxing"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, animi.</p>
            </div>
            </div>
        </div>

        <div className="news">
            <div className="image">
            <img
                src="/assets/american_football.jpg"
                alt="football"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, quo!</p>
            </div>
            </div>
        </div>

        <div className="news">
            <div className="image">
            <img
                src="/assets/astronaut.jpg"
                alt="astronaut"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, officiis.</p>
            </div>
            </div>
        </div>

        <div className="news">
            <div className="image">
            <img
                src="/assets/camel.jpg"
                alt="camel"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti.</p>
            </div>
            </div>
        </div>

        <div className="news">
            <div className="image">
            <img
                src="/assets/ferrari.jpg"
                alt="ferrari"
            />
            </div>
            <div className="content">
            <div className="title">
                <h3>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Lorem ipsum dolor sit amet
                </a>
                </h3>
            </div>
            <div className="descr">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, alias.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
}

export default HomeSectionNews;


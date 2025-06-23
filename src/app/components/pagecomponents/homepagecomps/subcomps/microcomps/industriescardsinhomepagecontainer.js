import HomePageIndustriesCard from "@/app/components/layoutcomponents/cards/homepageindustriescard/homepageindustriescard";

export default function IndustriesCardsInHomepageContainer({honepageindustriesdata}) {
    return(
         <div className="industries-homepage-grid-container">
        {honepageindustriesdata.map((inddata, index) => (
          <HomePageIndustriesCard
            inddata={inddata}
            key={index}
            // isLast={index === honepageindustriesdata.length - 1}
          />
        ))}
      </div>
    );
}
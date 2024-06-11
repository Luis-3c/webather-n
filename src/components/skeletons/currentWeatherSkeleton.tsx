import SkeletonBase from "../ui/skeletonBase";

export default function CurrentWeatherSkeleton() {
    return(
        <div className=" text-center pb-28 px-8 lg:px-14 lg:flex lg:flex-col lg:justify-center" style={{'backgroundImage':'linear-gradient(rgb(106,6,182,1), rgb(117 17 184 / 15%)), url("https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundPosition: "center", backgroundSize: "cover"}}>
      <SkeletonBase className=" w-72 lg:min-w-[600px] h-10 mx-auto" />
      <SkeletonBase className=" w-60 h-36 mt-4 mx-auto"/>
      <SkeletonBase className=" lg:min-w-[600px] h-24 mt-4 mx-auto rounded-xl"/>
    </div>
    );
}
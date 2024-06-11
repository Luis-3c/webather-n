import SkeletonBase from "../ui/skeletonBase";

export default function NextHoursSkeleton() {
    return(
        <>
        <SkeletonBase className="w-32 h-8 mx-auto" />
        <SkeletonBase className="mt-4 w-full h-24 lg:h-96" />
        </>
    );
}
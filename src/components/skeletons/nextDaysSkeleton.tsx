import SkeletonBase from "../ui/skeletonBase";

interface Props extends React.HTMLAttributes<HTMLElement> {}

export default function NextDyasSkeleton({className}: Props) {
    return(
        <div className={className}>
            <SkeletonBase className="h-12" />
            <SkeletonBase className="h-12 mt-4" />
        </div>
    );
}
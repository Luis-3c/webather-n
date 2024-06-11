interface Props extends React.HTMLAttributes<HTMLElement> {}
export default function SkeletonBase({className}: Props) {
    return (
        <div className={`bg-gray-300 rounded animate-pulse ${className}`}></div>
    );
    
}
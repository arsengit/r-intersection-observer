/**
 * @funtion ExampleComponent
 */

import * as React from 'react'

export interface IIntersectionObserverProps
{
  rootMargin?: string;
  threshold?: number;
  root?: JSX.Element | any;
  callBack?: (isIntesecting?: boolean, entry?: IntersectionObserverEntry) => void;
  className?: string;
  onlyOnce?: boolean;
  onlyCallBack?: boolean;
  children?: React.ReactChild | ChildNode | any
}

export default function ExampleComponent(props: IIntersectionObserverProps)
{
  let [inView, setInview] = React.useState<any>(null);
  let sectionRef = React.useRef<any>(null);
  let { rootMargin, threshold, root, callBack, className } = props;
  let onlyCallback = false || props.onlyCallBack;
  let onlyOnce = true || props.onlyOnce;
  let options = {
    root,
    rootMargin,
    threshold
  }
  React.useEffect(() =>
  {
    observeSection()
  }, [])

  return (
    <div className={className} ref={sectionRef}>
      {props.children(inView)}
    </div>
  )


  function observeSection()
  {
    let observer = new IntersectionObserver(entries =>
    {
      entries.forEach(entry =>
      {
        intersectingHandler(entry.isIntersecting, entry);
      });
    }, options);
    if (sectionRef.current)
    {
      observer.observe(sectionRef.current)
    }
  }
  function intersectingHandler(isIntersecting: boolean, entry: IntersectionObserverEntry)
  {
    if (onlyCallback)
    {
      if (callBack)
      {
        callBack(isIntersecting, entry)
      }
    }
    else
    {
      if (isIntersecting)
      {
        setInview(true)
      }
      else
      {
        if (!onlyOnce)
        {
          setInview(false)
        }
      }
      if (callBack)
      {
        callBack(isIntersecting, entry)
      }
    }
  }
}

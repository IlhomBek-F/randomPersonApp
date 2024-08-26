function ErrorBoundary({ title }: { title: string }) {
    return <p style={{ fontFamily: 'system-ui', color: '#797979' }}>{title}</p>
}

export { ErrorBoundary }
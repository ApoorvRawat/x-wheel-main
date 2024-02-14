// import styles from "./singlePost.module.css";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>SinglePostPage
            <div className={styles.imgContainer}>
                <img src="/photo.png" alt="" fill className={style.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <img className={styles.avatar}
                    src="/photo.png"
                    alt=""
                    fill/>
                    <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Date</span>
                    </div>
                    <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>01.03.2023</span>
                    </div>
                </div>
                <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

        </div>

    )
}

export default SinglePostPage
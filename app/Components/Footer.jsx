export default function Footer() {
  return (
    <footer>
      <div class="items-center">
        <div class="py-4 bg-slate-200 dark:bg-slate-900 w-fill">
          <div class="mr-2 w-fit">
            <a href="https://github.com/gr3g0ry552/ece-webtech-grouzelle-monsoro">
              <img
                class="rounded-full bg-slate-200"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width={60}
                height={60}
              />
            </a>
          </div>
          <div class="text-center ">
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { test, expect } from '@playwright/test';

test('deve tocar uma música', async ({ page }) => {

const song = {
  
    id: 1,
    title: "Bughium",
    artist: "Nullvana",
    description: "Nullvana",
    image: "https://raw.githubusercontent.com/qaxperience/mock/main/covers/nevertesting.jpg",
    type: "album",
    src: "https://raw.githubusercontent.com/qaxperience/mock/main/songs/grunge.mp3"
  
}

  await page.goto('/');

  const LoggedUser = page.locator('.logged-user')
  await expect(LoggedUser).toHaveText('Fernando Papito')

  await page.click('(//button[contains(@class,'play w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center flex')])[1]')
  await page.waitForTimeout(5000)

  const songCard = page.locator('.song').filter({hasText: song.title})

  const play = songCard.locator('play')
  const pause = songCard.locator('.pause')
  await play.click()
  await expect(pause).toBeVisible({ timeout: 2000})
});
